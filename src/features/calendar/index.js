import { useState, useEffect} from 'react'
import CalendarView from '../../components/CalendarView'
import moment from 'moment'
import { CALENDAR_INITIAL_EVENTS } from '../../utils/dummyData'
import { useDispatch } from 'react-redux'
import { openRightDrawer } from '../common/rightDrawerSlice'
import { RIGHT_DRAWER_TYPES } from '../../utils/globalConstantUtil'
import { showNotification } from '../common/headerSlice'
import { gapi } from 'gapi-script'
import Event from './components/Event'
import TitleCard from '../../components/Cards/TitleCard'



const INITIAL_EVENTS = CALENDAR_INITIAL_EVENTS

function Calendar(){

    //Google Calendar Integration
    const [events, setEvents] = useState([]);
    const calendarID = process.env.REACT_APP_CALENDAR_ID;
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

    const getEvents = (calendarID, apiKey) => {
        function initiate() {
          gapi.client
            .init({
              apiKey: apiKey,
            })
            .then(function () {
              return gapi.client.request({
                path: `https://www.googleapis.com/calendar/v3/calendars/atkkg36lrlu0b1m3742c29skbc@group.calendar.google.com/events`,
              });
            })
            .then(
              (response) => {
                let events = response.result.items;
                setEvents(events);
              },
              function (err) {
                return [false, err];
              }
            );
        }
        gapi.load("client", initiate);
      };
     
      useEffect(() => {
        const events = getEvents(calendarID, apiKey);
        setEvents(events);
      }, []);

    // const dispatch = useDispatch()
    // Add your own Add Event handler, like opening modal or random event addition
    // Format - {title :"", theme: "", startTime : "", endTime : ""}, typescript version comming soon :)
    // const addNewEvent = (date) => {
    //     let randomEvent = INITIAL_EVENTS[Math.floor(Math.random() * 10)]
    //     let newEventObj = {title : randomEvent.title, theme : randomEvent.theme, startTime : moment(date).startOf('day'), endTime : moment(date).endOf('day')}
    //     setEvents([...events, newEventObj])
    //     dispatch(showNotification({message : "New Event Added!", status : 1}))
    // }

    // Open all events of current day in sidebar 
    // const openDayDetail = ({filteredEvents, title}) => {
    //     dispatch(openRightDrawer({header : title, bodyType : RIGHT_DRAWER_TYPES.CALENDAR_EVENTS, extraObject : {filteredEvents}}))
    // }

    return(
        <>
           {/* <CalendarView 
                calendarEvents={events}
                addNewEvent={addNewEvent}
                openDayDetail={openDayDetail}
           /> */}
           <TitleCard title="Upcoming event"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ul className="min-height: 100vh">
                    {events?.map((event) => (
                        <li key={event.id} className="flex justify-center">
                        <Event description={event.summary} />
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Calendar