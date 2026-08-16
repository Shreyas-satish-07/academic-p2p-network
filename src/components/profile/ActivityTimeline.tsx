import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface ActivityItem {
  id: string;
  title: string;
  time: string;
}

interface ActivityTimelineProps {
  activities: ActivityItem[];
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};


export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities }) => {
  return (
    <Card>
      <CardHeader>
        <span className="card-tab tab-slate">AC</span>
        <CardTitle>Activity feed</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div 
          className="flex flex-col"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {activities.map((activity, index) => (
            <motion.div 
              key={activity.id} 
              className="activity-item"
              variants={itemVariants}
            >
              {index < activities.length - 1 && (
                <div className="activity-line" />
              )}
              <div className="activity-dot" />
              <div className="activity-body">
                <div className="t">{activity.title}</div>
                <div className="s">{activity.time}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
