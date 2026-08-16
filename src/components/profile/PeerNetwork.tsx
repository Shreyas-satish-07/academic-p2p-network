import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Button from '../ui/button';
import type { Peer } from '../../types/peer';


interface PeerNetworkProps {
  peers: Peer[];
}

export const PeerNetwork: React.FC<PeerNetworkProps> = ({ peers }) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getColors = (index: number) => {
    const colorSchemes = [
      { bg: 'var(--pine-tint)', text: 'var(--pine-dark)' },
      { bg: 'var(--marigold-tint)', text: 'var(--marigold)' },
      { bg: 'var(--slate-tint)', text: 'var(--slate)' },
    ];
    return colorSchemes[index % colorSchemes.length];
  };

  return (
    <Card>
      <CardHeader>
        <span className="card-tab tab-marigold">PN</span>
        <CardTitle>Peer network</CardTitle>
        <span className="card-link">See all</span>
      </CardHeader>
      <CardContent>
        <div className="peer-grid">
          {peers.map((peer, index) => {
            const colors = getColors(index);
            return (
              <div key={peer.id} className="rail-peer">
                <div 
                  className="rail-peer-avatar" 
                  style={{ background: colors.bg, color: colors.text }}
                >
                  {getInitials(peer.name)}
                </div>
                <div className="rail-peer-info">
                  <div className="n">{peer.name}</div>
                  <div className="skills">{peer.department}</div>
                </div>
                <div className="rail-peer-right">
                  <span className="match-pct">{peer.matchPercentage}%</span>
                  <Button className="connect-btn">Connect</Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PeerNetwork;
