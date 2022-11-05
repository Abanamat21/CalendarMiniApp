import React from 'react';

import { Panel, PanelHeader, PanelHeaderBack, SplitLayout } from '@vkontakte/vkui';
import { ScrollMenu,} from 'react-horizontal-scrolling-menu';

import Day from './Day';
import './Style.css';

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const CalendarFeed = props =>(
  <div className="MainPanel" onMouseEnter={props.disableScroll} onMouseLeave={props.enableScroll}>
    <ScrollMenu onWheel={onWheel}>
        {props.calendar && props.calendar.days.map((day) => (
          <Day key={day.date} day={day} />
        ))}  
    </ScrollMenu> 
  </div>
);

export default CalendarFeed;