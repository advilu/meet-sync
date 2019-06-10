Meet-Sync
Preliminary version (in dev) deployed at https://agile-river-97476.herokuapp.com/

Purpose:
To enable managers and their direct reports to prepare for, track, and record their 1:1 meetings, as well as metrics around performance and career development.

Technologies:
OAuth
SQL
Sequelize
Zoom SDK (in progress)
Google Calendar (in progress)

UX:
The current version is built out from the manager perspective. 

User is first directed to a home page where they must log in (via OAuth) to get data.  Current data is hardcoded as an example.  This includes a list of direct reports, with their corresponding data points for at-a-glance viewing.  Above are two links, one for the creation of a new 1:1 series, and the other for viewing archived meetings.

![Screen Shot 2019-06-09 at 6 51 52 PM](https://user-images.githubusercontent.com/46614197/59167821-073d1480-8ae8-11e9-8807-96698e206465.png)

On the right-hand side of the page, there is a calendar, synced to the user's Google account, which will display the scheduled meetings with thier direct reports.  When an event on the calendar is clicked, the user will be moved to a page specific to the related direct report.  This page will have the direct report's survey (filled out prior to each meeting), metrics reporting, and a form for the manager to fill out in prep for the 1:1.

A navbar allows access to the home page, login functionality, a survey page (currently hardcoded for the direct reports), a notes page (unfinished), and archives (unfinished).

Archives page prliminary UI:

![Screen Shot 2019-06-09 at 6 52 22 PM](https://user-images.githubusercontent.com/46614197/59167826-0dcb8c00-8ae8-11e9-8f27-5d06e55e9cf4.png)

From the direct report's perspective--the survey UI:

![Screen Shot 2019-06-09 at 6 52 09 PM](https://user-images.githubusercontent.com/46614197/59167833-13c16d00-8ae8-11e9-8123-0fe852bc31e5.png)