function myCalendar() {
  // Creates a new calendar named "MENADD"
 var calendar = CalendarApp.createCalendar('MENADD', {
  summary: 'A calendar to plan my sessions.',
   color: CalendarApp.Color.BLUE
 });
 Logger.log('Created the calendar "%s", with the ID "%s".',
     calendar.getName(), calendar.getId());
}

function calender(){
  var event = CalendarApp.getDefaultCalendar().createEvent('Apps Script : Custom Functions',
    new Date('June 18, 2020 20:00:00 UTC'),
    new Date('June 18, 2020 21:00:00 UTC'));
Logger.log('Event ID: ' + event.getId());

}