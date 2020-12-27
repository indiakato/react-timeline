import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineEvents = props.events.map((event, i) => {
    return (
      <li key = {i}>
        < timelineEvent person = {event.person}
                        status = {event.status}
                        timeStamp = {event.timeStamp} />
      </li>
    )
  })
  return (
    <ul>{timelineEvents}</ul>
  )
}

export default Timeline;