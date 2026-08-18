import React, { useState, useEffect, useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/ui/button';
import '../styles/messages.css';

interface TimelineItem {
  id: string;
  time: string;
  type: 'file' | 'task' | 'meeting' | 'announcement' | 'update';
  text: string;
  user: string;
}

interface FileItem {
  name: string;
  size: string;
}

interface TaskItem {
  id: string;
  text: string;
  completed: boolean;
}

interface MeetingItem {
  title: string;
  time: string;
  link: string;
}

interface Workspace {
  id: string;
  name: string;
  category: 'direct' | 'group' | 'project' | 'research';
  categoryLabel: string;
  icon: string;
  avatarBg: string;
  avatarColor: string;
  membersCount: number;
  lastActivityText: string;
  lastActivityTime: string;
  unreadCount: number;
  deadlineText?: string;
  sharedResources: {
    filesCount: number;
    messagesCount: number;
    meetingsCount: number;
  };
  members: string[];
  files: FileItem[];
  tasks: TaskItem[];
  meetings: MeetingItem[];
  timeline: TimelineItem[];
}

const INITIAL_WORKSPACES: Workspace[] = [
  {
    id: 'dbms-circle',
    name: 'DBMS Circle',
    category: 'group',
    categoryLabel: '📚 Study Group',
    icon: '📚',
    avatarBg: 'var(--marigold-tint)',
    avatarColor: 'var(--marigold)',
    membersCount: 12,
    lastActivityText: '📄 ER_Diagram.pdf uploaded',
    lastActivityTime: '15 min ago',
    unreadCount: 3,
    deadlineText: 'Assignment due in 2 days',
    sharedResources: {
      filesCount: 14,
      messagesCount: 32,
      meetingsCount: 3
    },
    members: ['Ananya Rao', 'Rahul Sharma', 'Priya Nair', 'Shreyas Satish', 'Rhea Kulkarni', 'Amit Verma', 'Sanjana Sen'],
    files: [
      { name: 'DBMS_Notes.pdf', size: '2.4 MB' },
      { name: 'ER_Diagram.pdf', size: '1.2 MB' },
      { name: 'Normalization_Cheatsheet.pdf', size: '850 KB' }
    ],
    tasks: [
      { id: 't1', text: 'Research database schema', completed: true },
      { id: 't2', text: 'Prepare presentation', completed: false },
      { id: 't3', text: 'Submit assignment', completed: false }
    ],
    meetings: [
      { title: 'DBMS Review Session', time: 'Tomorrow, 6:00 PM', link: 'Online Meet' }
    ],
    timeline: [
      { id: 'l1', time: '10:30 AM', type: 'file', text: '📎 DBMS_Notes.pdf uploaded.', user: 'Ananya' },
      { id: 'l2', time: '11:15 AM', type: 'task', text: '☑ Normalization task completed.', user: 'Rahul' },
      { id: 'l3', time: '12:00 PM', type: 'meeting', text: '📅 Meeting scheduled: DBMS Review Session.', user: 'Priya' },
      { id: 'l4', time: '2:00 PM', type: 'announcement', text: '📌 ER diagram finalized.', user: 'Ananya' }
    ]
  },
  {
    id: 'smart-attendance',
    name: 'Smart Attendance System',
    category: 'project',
    categoryLabel: '🚀 Project Team',
    icon: '🚀',
    avatarBg: 'var(--pine-tint)',
    avatarColor: 'var(--pine-dark)',
    membersCount: 5,
    lastActivityText: 'Task completed',
    lastActivityTime: '45 min ago',
    unreadCount: 0,
    deadlineText: 'Project Phase 1 due in 5 days',
    sharedResources: {
      filesCount: 14,
      messagesCount: 20,
      meetingsCount: 2
    },
    members: ['Ananya Rao', 'Rahul Sharma', 'Priya Nair', 'Shreyas Satish', 'You'],
    files: [
      { name: 'SmartAttendance_Specs.pdf', size: '1.8 MB' },
      { name: 'UML_Documentation.pdf', size: '3.1 MB' },
      { name: 'SmartAttendance_System.zip', size: '15.4 MB' }
    ],
    tasks: [
      { id: 't4', text: 'Create ER diagram', completed: false },
      { id: 't5', text: 'Normalize tables', completed: true },
      { id: 't6', text: 'Review presentation', completed: true },
      { id: 't7', text: 'Complete documentation', completed: false }
    ],
    meetings: [
      { title: 'Phase 1 Sync Meeting', time: 'Tomorrow, 4:00 PM', link: 'Seminar Hall 3' }
    ],
    timeline: [
      { id: 'l5', time: 'Yesterday', type: 'file', text: '📎 SmartAttendance_Specs.pdf uploaded.', user: 'Priya' },
      { id: 'l6', time: 'Yesterday', type: 'task', text: '☑ Normalize tables completed.', user: 'Rahul' },
      { id: 'l7', time: 'Today', type: 'task', text: '☑ Review presentation completed.', user: 'You' }
    ]
  },
  {
    id: 'rahul-dm',
    name: 'Rahul Sharma',
    category: 'direct',
    categoryLabel: '📩 Direct Message',
    icon: '📩',
    avatarBg: 'var(--slate-tint)',
    avatarColor: 'var(--slate)',
    membersCount: 2,
    lastActivityText: '💬 Did you complete the assignment?',
    lastActivityTime: '25 min ago',
    unreadCount: 0,
    sharedResources: {
      filesCount: 1,
      messagesCount: 12,
      meetingsCount: 0
    },
    members: ['Rahul Sharma', 'You'],
    files: [
      { name: 'Assignment1_Draft.pdf', size: '1.1 MB' }
    ],
    tasks: [
      { id: 't8', text: 'Complete SQL exercises', completed: false }
    ],
    meetings: [],
    timeline: [
      { id: 'l8', time: 'Yesterday', type: 'update', text: '💬 Hey, let\'s coordinate on SQL assignments.', user: 'Rahul Sharma' },
      { id: 'l9', time: '25m ago', type: 'update', text: '💬 Did you complete the assignment?', user: 'Rahul Sharma' }
    ]
  },
  {
    id: 'os-circle',
    name: 'OS Internals Circle',
    category: 'research',
    categoryLabel: '🔬 Research Discussion',
    icon: '🔬',
    avatarBg: 'var(--rust-tint)',
    avatarColor: 'var(--rust)',
    membersCount: 8,
    lastActivityText: 'New material uploaded',
    lastActivityTime: '2h ago',
    unreadCount: 0,
    sharedResources: {
      filesCount: 6,
      messagesCount: 8,
      meetingsCount: 1
    },
    members: ['Amit Verma', 'Kunal Shah', 'Rhea Kulkarni', 'Vikram Dev', 'Siddharth Rao', 'Aishwarya Nair'],
    files: [
      { name: 'OS_Lab_Manual.pdf', size: '4.2 MB' }
    ],
    tasks: [
      { id: 't9', text: 'Read scheduling algorithms', completed: false }
    ],
    meetings: [],
    timeline: [
      { id: 'l10', time: '2h ago', type: 'file', text: '📎 OS_Lab_Manual.pdf uploaded.', user: 'System Bot' }
    ]
  }
];

export const CollaborationWorkspace: React.FC = () => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>(INITIAL_WORKSPACES);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'discussion' | 'files' | 'tasks' | 'meetings'>('discussion');
  const [updateText, setUpdateText] = useState('');
  const [postType, setPostType] = useState<'update' | 'announcement' | 'file' | 'meeting'>('update');
  const [fabOpen, setFabOpen] = useState(false);
  const timelineEndRef = useRef<HTMLDivElement>(null);

  const activeWorkspace = workspaces.find(w => w.id === activeWorkspaceId) || null;

  // Mark unread updates as read when workspace is selected
  useEffect(() => {
    if (activeWorkspaceId) {
      setWorkspaces(prev =>
        prev.map(w => (w.id === activeWorkspaceId ? { ...w, unreadCount: 0 } : w))
      );
    }
  }, [activeWorkspaceId]);

  // Scroll to bottom of timeline when logs expand
  useEffect(() => {
    if (activeTab === 'discussion') {
      timelineEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeWorkspace?.timeline, activeTab]);

  // Post update handler
  const handlePostUpdate = () => {
    if (!updateText.trim() || !activeWorkspaceId) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let prefixedText = updateText.trim();
    if (postType === 'announcement') prefixedText = `📌 ${prefixedText}`;
    else if (postType === 'file') prefixedText = `📎 ${prefixedText}`;
    else if (postType === 'meeting') prefixedText = `📅 ${prefixedText}`;
    else prefixedText = `💬 ${prefixedText}`;

    const newLog: TimelineItem = {
      id: `l-user-${Date.now()}`,
      time: timeStr,
      type: postType === 'announcement' ? 'announcement' : postType === 'file' ? 'file' : postType === 'meeting' ? 'meeting' : 'update',
      text: prefixedText,
      user: 'You'
    };

    setWorkspaces(prev =>
      prev.map(w => {
        if (w.id === activeWorkspaceId) {
          const updatedFiles = [...w.files];
          if (postType === 'file') {
            updatedFiles.push({ name: updateText.trim(), size: 'Uploaded just now' });
          }
          const updatedMeetings = [...w.meetings];
          if (postType === 'meeting') {
            updatedMeetings.push({ title: updateText.trim(), time: 'Scheduled', link: 'Workspace Link' });
          }

          return {
            ...w,
            lastActivityText: prefixedText,
            lastActivityTime: 'Just now',
            files: updatedFiles,
            meetings: updatedMeetings,
            sharedResources: {
              ...w.sharedResources,
              filesCount: postType === 'file' ? w.sharedResources.filesCount + 1 : w.sharedResources.filesCount,
              meetingsCount: postType === 'meeting' ? w.sharedResources.meetingsCount + 1 : w.sharedResources.meetingsCount,
              messagesCount: w.sharedResources.messagesCount + 1
            },
            timeline: [...w.timeline, newLog]
          };
        }
        return w;
      })
    );

    setUpdateText('');
  };

  // Toggle tasks completion dynamically updating progress and appending timeline log
  const handleToggleTask = (taskId: string) => {
    if (!activeWorkspaceId) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setWorkspaces(prev =>
      prev.map(w => {
        if (w.id === activeWorkspaceId) {
          let toggledTaskName = '';
          let isNowCompleted = false;

          const updatedTasks = w.tasks.map(t => {
            if (t.id === taskId) {
              toggledTaskName = t.text;
              isNowCompleted = !t.completed;
              return { ...t, completed: isNowCompleted };
            }
            return t;
          });

          const taskLog: TimelineItem = {
            id: `l-task-${Date.now()}`,
            time: timeStr,
            type: 'task',
            text: isNowCompleted ? `☑ ${toggledTaskName} completed.` : `☐ ${toggledTaskName} marked incomplete.`,
            user: 'You'
          };

          return {
            ...w,
            lastActivityText: isNowCompleted ? `☑ Task completed` : `Task changed`,
            lastActivityTime: 'Just now',
            tasks: updatedTasks,
            timeline: [...w.timeline, taskLog]
          };
        }
        return w;
      })
    );
  };

  // FAB Menu Actions Trigger (Mock updates)
  const handleCreateMockCollab = (typeLabel: string, typeKey: 'direct' | 'group' | 'project' | 'research') => {
    const id = `collab-${Date.now()}`;
    const name = prompt(`Enter name for the new ${typeLabel}:`) || '';
    if (!name.trim()) return;

    const newWorkspace: Workspace = {
      id,
      name: name.trim(),
      category: typeKey,
      categoryLabel: typeLabel,
      icon: typeKey === 'direct' ? '📩' : typeKey === 'group' ? '📚' : typeKey === 'project' ? '🚀' : '🔬',
      avatarBg: 'var(--slate-tint)',
      avatarColor: 'var(--slate)',
      membersCount: typeKey === 'direct' ? 2 : 5,
      lastActivityText: 'Workspace initialized.',
      lastActivityTime: 'Just now',
      unreadCount: 0,
      sharedResources: { filesCount: 0, messagesCount: 0, meetingsCount: 0 },
      members: ['You', 'Rahul Sharma'],
      files: [],
      tasks: [],
      meetings: [],
      timeline: [{ id: `l-init-${Date.now()}`, time: 'Just now', type: 'announcement', text: '📌 Workspace initialized.', user: 'System' }]
    };

    setWorkspaces(prev => [newWorkspace, ...prev]);
    setActiveWorkspaceId(id);
    setFabOpen(false);
  };

  // Group collaborations by category
  const directList = workspaces.filter(w => w.category === 'direct');
  const groupList = workspaces.filter(w => w.category === 'group');
  const projectList = workspaces.filter(w => w.category === 'project');
  const researchList = workspaces.filter(w => w.category === 'research');

  // Helper to calculate progress ratio
  const getTasksCompletedStats = (w: Workspace) => {
    const completed = w.tasks.filter(t => t.completed).length;
    const total = w.tasks.length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percent };
  };

  return (
    <AppLayout>
      <div className={`msg-container ${activeWorkspaceId ? 'has-active-chat' : ''}`}>
        
        {/* Left Panel: Collaboration list organized by Categories */}
        <aside className="msg-list-panel">
          <div className="workspace-list-header">
            <h2 className="panel-title-primary">Collaborations</h2>
          </div>
          
          <div className="conversation-scroll-area">
            {/* Category: DIRECT MESSAGES */}
            {directList.length > 0 && (
              <div className="category-section">
                <h3 className="category-header-title">📩 DIRECT MESSAGES</h3>
                {directList.map(item => (
                  <WorkspaceCard key={item.id} item={item} activeId={activeWorkspaceId} onSelect={setActiveWorkspaceId} />
                ))}
              </div>
            )}

            {/* Category: STUDY GROUPS */}
            {groupList.length > 0 && (
              <div className="category-section">
                <h3 className="category-header-title">📚 STUDY GROUPS</h3>
                {groupList.map(item => (
                  <WorkspaceCard key={item.id} item={item} activeId={activeWorkspaceId} onSelect={setActiveWorkspaceId} />
                ))}
              </div>
            )}

            {/* Category: PROJECT TEAMS */}
            {projectList.length > 0 && (
              <div className="category-section">
                <h3 className="category-header-title">🚀 PROJECT TEAMS</h3>
                {projectList.map(item => (
                  <WorkspaceCard key={item.id} item={item} activeId={activeWorkspaceId} onSelect={setActiveWorkspaceId} />
                ))}
              </div>
            )}

            {/* Category: RESEARCH DISCUSSIONS */}
            {researchList.length > 0 && (
              <div className="category-section">
                <h3 className="category-header-title">🔬 RESEARCH DISCUSSIONS</h3>
                {researchList.map(item => (
                  <WorkspaceCard key={item.id} item={item} activeId={activeWorkspaceId} onSelect={setActiveWorkspaceId} />
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Center Panel: Collaboration Workspace */}
        <section className="msg-chat-panel">
          {activeWorkspace ? (
            <>
              {/* Workspace Header */}
              <header className="chat-header">
                <button className="chat-back-btn" onClick={() => setActiveWorkspaceId(null)} aria-label="Back to Collaborations">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
                <div className="header-info">
                  <div className="header-name-row">
                    <span className="workspace-ico-header">{activeWorkspace.icon}</span>
                    <h2 className="header-user-name">{activeWorkspace.name}</h2>
                  </div>
                  <div className="header-meta">
                    {activeWorkspace.membersCount} members • {activeWorkspace.files.length} resources • {activeWorkspace.meetings.length > 0 ? '1 meeting pending' : 'No meetings scheduled'}
                  </div>
                </div>
              </header>

              {/* Workspace Navigation Tabs */}
              <nav className="workspace-tabs-nav">
                <button className={`tab-nav-btn ${activeTab === 'discussion' ? 'active' : ''}`} onClick={() => setActiveTab('discussion')}>
                  Discussion
                </button>
                <button className={`tab-nav-btn ${activeTab === 'files' ? 'active' : ''}`} onClick={() => setActiveTab('files')}>
                  Files
                </button>
                <button className={`tab-nav-btn ${activeTab === 'tasks' ? 'active' : ''}`} onClick={() => setActiveTab('tasks')}>
                  Tasks
                </button>
                <button className={`tab-nav-btn ${activeTab === 'meetings' ? 'active' : ''}`} onClick={() => setActiveTab('meetings')}>
                  Meetings
                </button>
              </nav>

              {/* Workspace Content Tabs Panel */}
              <div className="chat-messages-area workspace-tab-content">
                
                {/* 1. DISCUSSION TAB: Activity Timeline feed */}
                {activeTab === 'discussion' && (
                  <div className="discussion-tab-pane">
                    <div className="activity-timeline-feed">
                      {activeWorkspace.timeline.map((log) => (
                        <div key={log.id} className="timeline-entry-row">
                          <div className="timeline-time-badge">{log.time}</div>
                          <div className={`timeline-entry-card type-${log.type}`}>
                            <div className="entry-card-header">
                              <span className="entry-user">{log.user}</span>
                            </div>
                            <div className="entry-card-body">
                              {log.text}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div ref={timelineEndRef} />
                    </div>

                    {/* Add Update Box */}
                    <div className="chat-composer workspace-update-composer">
                      <div className="update-type-select-row">
                        <span className="select-label">Post type:</span>
                        <select 
                          className="post-type-selector" 
                          value={postType} 
                          onChange={(e) => setPostType(e.target.value as any)}
                        >
                          <option value="update">💬 Comment / Post</option>
                          <option value="announcement">📌 Announcement</option>
                          <option value="file">📎 File Link</option>
                          <option value="meeting">📅 Meeting Notice</option>
                        </select>
                      </div>
                      <div className="composer-row">
                        <input 
                          type="text" 
                          placeholder={
                            postType === 'announcement' ? "Add announcement text..." :
                            postType === 'file' ? "Enter filename to share (e.g. SQL_Notes.pdf)..." :
                            postType === 'meeting' ? "Enter meeting topic or title..." :
                            "Share an update with the workspace..."
                          }
                          value={updateText}
                          onChange={(e) => setUpdateText(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handlePostUpdate()}
                          className="composer-input update-box-input"
                        />
                        <Button 
                          className="composer-send-btn post-update-btn" 
                          onClick={handlePostUpdate}
                        >
                          Post
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. FILES TAB */}
                {activeTab === 'files' && (
                  <div className="files-tab-pane">
                    <h3 className="tab-pane-title">Academic Resources</h3>
                    {activeWorkspace.files.length === 0 ? (
                      <p className="no-items-text">No resources shared yet.</p>
                    ) : (
                      <div className="files-list-grid">
                        {activeWorkspace.files.map((file, idx) => (
                          <div key={idx} className="file-resource-card">
                            <span className="file-icon-box">📄</span>
                            <div className="file-resource-info">
                              <div className="file-resource-name">{file.name}</div>
                              <div className="file-resource-size">{file.size}</div>
                            </div>
                            <Button className="file-download-btn outline">Download</Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 3. TASKS TAB */}
                {activeTab === 'tasks' && (
                  <div className="tasks-tab-pane">
                    <h3 className="tab-pane-title">Workspace Checklist</h3>
                    {activeWorkspace.tasks.length === 0 ? (
                      <p className="no-items-text">No tasks created yet.</p>
                    ) : (
                      <div className="tasks-checklist-list">
                        {activeWorkspace.tasks.map((task) => (
                          <label key={task.id} className="task-checkbox-label">
                            <input 
                              type="checkbox" 
                              checked={task.completed} 
                              onChange={() => handleToggleTask(task.id)}
                              className="task-checkbox-inp"
                            />
                            <span className={`task-checkbox-text ${task.completed ? 'completed' : ''}`}>
                              {task.text}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 4. MEETINGS TAB */}
                {activeTab === 'meetings' && (
                  <div className="meetings-tab-pane">
                    <h3 className="tab-pane-title">Upcoming Meetings</h3>
                    {activeWorkspace.meetings.length === 0 ? (
                      <p className="no-items-text">No upcoming meetings scheduled.</p>
                    ) : (
                      <div className="meetings-schedule-list">
                        {activeWorkspace.meetings.map((meet, idx) => (
                          <div key={idx} className="meeting-schedule-card">
                            <div className="meeting-date-badge">
                              <span className="calendar-ico">📅</span>
                              <span className="date-txt">{meet.time}</span>
                            </div>
                            <div className="meeting-card-details">
                              <div className="meeting-title">{meet.title}</div>
                              <div className="meeting-location">Location: <strong>{meet.link}</strong></div>
                            </div>
                            <Button className="meeting-join-btn primary">Join Meeting</Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>
            </>
          ) : (
            <div className="chat-empty-state">
              <div className="empty-state-ico">💬</div>
              <p className="empty-state-text">Select a collaboration workspace to start messaging.</p>
            </div>
          )}
        </section>

        {/* Right Panel: Shared Context */}
        <aside className="msg-info-panel">
          {activeWorkspace ? (
            <div className="info-panel-content">
              {/* Deadlines Section */}
              <div className="info-section">
                <h4 className="info-section-title">Deadlines</h4>
                <div className="deadline-alert-card">
                  <span className="warning-ico">⚠️</span>
                  <div className="deadline-info">
                    <div className="deadline-title">Assignment Due</div>
                    <div className="deadline-sub">{activeWorkspace.deadlineText || 'No pending deadlines'}</div>
                  </div>
                </div>
              </div>

              {/* Members Section */}
              <div className="info-section">
                <h4 className="info-section-title">Members</h4>
                <ul className="info-group-list">
                  {activeWorkspace.members.map((member, idx) => (
                    <li key={idx} className="info-group-item">
                      <span className="member-avatar-mini">{member.substring(0, 2).toUpperCase()}</span>
                      <span className="group-name">{member}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academic Metrics */}
              <div className="info-section">
                <h4 className="info-section-title">Shared Resources</h4>
                <div className="academic-metrics-box">
                  <div className="metric-row-item">
                    <span className="metric-lbl">Resources shared</span>
                    <span className="metric-val">{activeWorkspace.sharedResources.filesCount}</span>
                  </div>
                  <div className="metric-row-item">
                    <span className="metric-lbl">Tasks completed</span>
                    <span className="metric-val">
                      {getTasksCompletedStats(activeWorkspace).completed}/{getTasksCompletedStats(activeWorkspace).total}
                    </span>
                  </div>
                  <div className="metric-row-item">
                    <span className="metric-lbl">Next deadline</span>
                    <span className="metric-val">{activeWorkspace.deadlineText ? '2 days' : 'None'}</span>
                  </div>
                  <div className="metric-row-item">
                    <span className="metric-lbl">Meetings this week</span>
                    <span className="metric-val">{activeWorkspace.sharedResources.meetingsCount}</span>
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="info-section">
                <h4 className="info-section-title">Progress</h4>
                <div className="progress-bar-wrap">
                  <div className="progress-percentage-label">
                    {getTasksCompletedStats(activeWorkspace).percent}% complete
                  </div>
                  <div className="progress-bar-track">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${getTasksCompletedStats(activeWorkspace).percent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="info-empty-state">
              <p>No workspace details loaded.</p>
            </div>
          )}
        </aside>

        {/* Floating Action Button (FAB) Menu */}
        <div className={`collaboration-fab-container ${fabOpen ? 'open' : ''}`}>
          {fabOpen && (
            <div className="fab-options-menu">
              <button className="fab-menu-option" onClick={() => handleCreateMockCollab('Direct Message', 'direct')}>
                <span>💬</span> Direct Message
              </button>
              <button className="fab-menu-option" onClick={() => handleCreateMockCollab('Study Group', 'group')}>
                <span>📚</span> Study Group
              </button>
              <button className="fab-menu-option" onClick={() => handleCreateMockCollab('Project Team', 'project')}>
                <span>🚀</span> Project Team
              </button>
              <button className="fab-menu-option" onClick={() => handleCreateMockCollab('Research Discussion', 'research')}>
                <span>🔬</span> Research Discussion
              </button>
            </div>
          )}
          <button 
            className="collaboration-fab-btn" 
            onClick={() => setFabOpen(!fabOpen)}
            aria-label="New Collaboration Menu"
          >
            {fabOpen ? '✕' : '+ New'}
          </button>
        </div>

      </div>
    </AppLayout>
  );
};

/* Internal Component: Collaboration Card */
interface CardProps {
  item: Workspace;
  activeId: string | null;
  onSelect: (id: string) => void;
}

const WorkspaceCard: React.FC<CardProps> = ({ item, activeId, onSelect }) => {
  const isActive = item.id === activeId;
  return (
    <div 
      className={`conversation-card ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(item.id)}
    >
      <div className="card-avatar-wrap">
        <div 
          className="card-avatar"
          style={{ backgroundColor: item.avatarBg, color: item.avatarColor }}
        >
          {item.icon}
        </div>
      </div>
      <div className="card-info">
        <div className="card-top-row">
          <span className="card-user-name">{item.name}</span>
          <span className="card-time">{item.lastActivityTime}</span>
        </div>
        <div className="card-bottom-row">
          <span className="card-msg-preview">{item.lastActivityText}</span>
          {item.unreadCount > 0 && (
            <span className="card-unread-badge">{item.unreadCount}</span>
          )}
        </div>
        <div className="card-sub-info-row">
          <span className="card-members-count">👥 {item.membersCount} members</span>
          <span className="card-cat-pill">{item.categoryLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default CollaborationWorkspace;
