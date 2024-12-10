import React, { useCallback, useState } from 'react';
import { ArrowDown } from 'react-feather';
import { ArrowUp } from 'react-feather';
import { RealtimeEvent } from '../utils/interfaces';

interface LogDrawerProps {
  realtimeEvents: RealtimeEvent[];
  startTimeRef: React.MutableRefObject<string>;
  eventsScrollRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
}

export const LogDrawer: React.FC<LogDrawerProps> = ({
  realtimeEvents,
  startTimeRef,
  eventsScrollRef,
  isOpen,
}) => {
  /**
   * Utility for formatting the timing of logs
   */

  const [expandedEvents, setExpandedEvents] = useState<{
    [key: string]: boolean;
  }>({});

  const formatTime = useCallback((timestamp: string) => {
    const startTime = startTimeRef.current;
    const t0 = new Date(startTime).valueOf();
    const t1 = new Date(timestamp).valueOf();
    const delta = t1 - t0;
    const hs = Math.floor(delta / 10) % 100;
    const s = Math.floor(delta / 1000) % 60;
    const m = Math.floor(delta / 60_000) % 60;
    const pad = (n: number) => {
      let s = n + '';
      while (s.length < 2) {
        s = '0' + s;
      }
      return s;
    };
    return `${pad(m)}:${pad(s)}.${pad(hs)}`;
  }, []);
  return (
    <div className={`log-drawer ${isOpen ? 'open' : ''}`}>
      <div className="content-block-title">events</div>
      <div className="content-block-body" ref={eventsScrollRef}>
        {!realtimeEvents.length && `awaiting connection...`}
        {realtimeEvents.map((realtimeEvent, i) => {
          const count = realtimeEvent.count;
          const event = { ...realtimeEvent.event };
          if (event.type === 'input_audio_buffer.append') {
            event.audio = `[trimmed: ${event.audio.length} bytes]`;
          } else if (event.type === 'response.audio.delta') {
            event.delta = `[trimmed: ${event.delta.length} bytes]`;
          }
          return (
            <div className="event" key={event.event_id}>
              <div className="event-timestamp">
                {formatTime(realtimeEvent.time)}
              </div>
              <div className="event-details">
                <div
                  className="event-summary"
                  onClick={() => {
                    // toggle event details
                    const id = event.event_id;
                    const expanded = { ...expandedEvents };
                    if (expanded[id]) {
                      delete expanded[id];
                    } else {
                      expanded[id] = true;
                    }
                    setExpandedEvents(expanded);
                  }}
                >
                  <div
                    className={`event-source ${
                      event.type === 'error' ? 'error' : realtimeEvent.source
                    }`}
                  >
                    {realtimeEvent.source === 'client' ? (
                      <ArrowUp />
                    ) : (
                      <ArrowDown />
                    )}
                    <span>
                      {event.type === 'error' ? 'error!' : realtimeEvent.source}
                    </span>
                  </div>
                  <div className="event-type">
                    {event.type}
                    {count && ` (${count})`}
                  </div>
                </div>
                {!!expandedEvents[event.event_id] && (
                  <div className="event-payload">
                    {JSON.stringify(event, null, 2)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
