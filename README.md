# Event-Scheduler-Reminder-System
Event Scheduling and Reminder System allows users to efficiently organize, schedule, and track their daily events or important activities. The system notifies the user about upcoming events through browser notifications and sound alerts, ensuring that no important event or task is missed.




📘 Software Engineering Practicals: All 12 Experiments Using a Library Management System

Don't worry—we'll learn these as if you're performing them for the first time. ❤️

The goal is not just to memorise answers. It's to understand what to write, what to draw, which software to use, and how to adapt your answer if the examiner gives you a different project.

We'll use one project throughout all 12 experiments:

Our project: Library Management System (LMS)

Imagine your college library currently records book issues and returns in registers. You want to develop software to manage everything digitally.

The system should allow:

- Students to log in and search for books.
- Librarians to add books and issue or return them.
- The system to calculate overdue fines.
- The administrator to manage users and view reports.

First, remember these project details

Item	Library Management System

Users	Student, Librarian, Admin
Main entities	Book, User, Loan, Fine
Main process	Search → Issue → Return
Main problem	Manual records take time and can contain errors
Main objective	Manage library operations accurately and efficiently


We'll reuse these details in the practicals. This is the secret: understand the project once, then use the same information differently for each experiment.


---

Practical 1: Software Requirements Specification (SRS)

1. What is an SRS?

An SRS (Software Requirements Specification) is a document that describes what the software must do and the conditions under which it must operate.

Think of it as a written agreement between the customer and the developer.

For example, before building a library app, you must decide:

- Can students search for books?
- Can librarians issue books?
- How many books can a student borrow?
- How will overdue fines be calculated?
- How will passwords be protected?

These requirements go into the SRS.

2. Aim

To prepare a Software Requirements Specification for a Library Management System.

3. Procedure: What to write in the exam

Step 1: Introduction

Write the purpose of the system and the problem it solves.

Step 2: Identify users

- Student: Searches for books and checks borrowed books.
- Librarian: Adds books, issues books, and processes returns.
- Admin: Manages users and generates reports.

Step 3: Write functional requirements

Functional requirements describe what the system does.

ID	Requirement

FR1	The system shall allow users to log in securely.
FR2	Students shall be able to search for books by title, author, or ISBN.
FR3	Librarians shall be able to add, update, and remove book records.
FR4	Librarians shall be able to issue available books.
FR5	The system shall record book returns.
FR6	The system shall calculate overdue fines according to library policy.
FR7	The system shall display the books currently borrowed by a student.
FR8	The admin shall be able to manage user accounts.


Step 4: Write non-functional requirements

These describe how well or securely the system must work.

Requirement	Example

Performance	Book searches should return results within an agreed response time.
Security	Passwords must be stored securely, not as plain text.
Reliability	The system should maintain accurate issue and return records.
Usability	The interface should be easy for students and librarians to use.
Availability	The system should be available during the library's operating hours.
Backup	The database should be backed up according to the library's backup policy.


Step 5: Specify the basic requirements

Hardware: Computer, sufficient RAM and storage, network connection if required.

Software: Operating system, web browser if web-based, application software, and a database system.

Step 6: State assumptions and constraints

- Each book has a unique identifier.
- Only authorised librarians can issue or return books.
- Borrowing limits and fine rates follow the library's rules.
- A book cannot be issued if no copy is available.

4. Result

The SRS for the Library Management System has been prepared, specifying its users, functional requirements, non-functional requirements, and constraints.

Exam memory trick

SRS = Purpose + Users + Features + Quality + Constraints

If the project changes, keep the structure and replace the requirements.


---

Practical 2: Work Breakdown Structure (WBS) and Gantt Chart

1. What is WBS?

A Work Breakdown Structure (WBS) divides a large project into smaller, manageable tasks.

Imagine building the entire Library Management System seems difficult. Instead, divide it into requirement analysis, design, coding, testing, and deployment.

2. What is a Gantt Chart?

A Gantt Chart displays project tasks on a timeline. It shows:

- What tasks must be completed.
- When each task starts and ends.
- How long each task takes.
- Which tasks depend on other tasks.

3. Aim

To prepare a WBS and a three-month Gantt Chart for the Library Management System.

4. WBS: Write this table

WBS ID	Task	Duration

1.0	Library Management System	12 weeks
1.1	Requirement collection	1 week
1.2	System analysis	1 week
1.3	System and database design	2 weeks
1.4	Frontend development	2 weeks
1.5	Backend development	3 weeks
1.6	Integration and testing	2 weeks
1.7	Deployment and documentation	1 week


These durations are an illustrative plan; your actual schedule should account for dependencies and available resources.

5. How to make a Gantt Chart

You can use GanttProject or another tool permitted by your examiner.

Step-by-step procedure

1. Open the Gantt chart application.
2. Create a new project called Library Management System.
3. Set the project start date.
4. Add each task from the WBS table.
5. Assign start dates and durations.
6. Set dependencies between tasks.
7. Display the tasks on the timeline.
8. Save the project and export or capture the chart if required.

Example timeline

Task	Weeks

Requirement collection	1
System analysis	2
System and database design	3–4
Frontend development	5–6
Backend development	7–9
Integration and testing	10–11
Deployment and documentation	12


Remember: A WBS is a list of tasks. A Gantt Chart is a timeline showing those tasks.

6. Result

The WBS and Gantt Chart for the Library Management System have been prepared to organise tasks and plan project completion.

If the examiner changes the project

For a Hospital Management System, replace the tasks with patient registration, appointment management, medical records, testing, and deployment. The method remains the same.


---

Practical 3: Basic COCOMO Model

1. What is COCOMO?

COCOMO stands for Constructive Cost Model.

It estimates the effort and development time required to develop software based on its estimated size.

Think of it as a way to estimate how many person-months of work a software project might require.

Important terms

- KLOC: Thousand lines of code.
- Effort: Work required, measured in person-months.
- Development time: Estimated duration in months.
- Average team size: Estimated effort divided by duration.

2. Aim

To calculate the software development effort and development time using the Basic COCOMO model.

3. Formulas to memorise

Effort:

\[
E=a(KLOC)^b
\]

Development time:

\[
D=2.5(E)^d
\]

Average team size:

\[
P=\frac{E}{D}
\]

Where:

- \(E\) = effort in person-months
- \(D\) = development time in months
- \(P\) = average team size
- \(a,b,d\) = coefficients for the selected project mode

Basic COCOMO coefficients

Mode	a	b	d

Organic	2.4	1.05	0.38
Semi-detached	3.0	1.12	0.35
Embedded	3.6	1.20	0.32


Use the coefficients given in your practical question if they differ.

4. Example calculation

Suppose the examiner gives:

- Project size = 10 KLOC
- Mode = Organic

Step 1: Calculate effort

\[
E=2.4(10)^{1.05}
\]

\[
E\approx26.91\text{ person-months}
\]

Step 2: Calculate development time

\[
D=2.5(26.91)^{0.38}
\]

\[
D\approx8.74\text{ months}
\]

Step 3: Calculate average team size

\[
P=\frac{26.91}{8.74}
\]

\[
P\approx3.08\text{ persons}
\]

Therefore, the estimated average team size is approximately 3 people, subject to rounding.

5. How to perform this practical

1. Read the given project size.
2. Convert the size into KLOC if necessary.
3. Identify the project mode.
4. Select the correct coefficients.
5. Calculate effort.
6. Calculate development time.
7. Calculate average team size if required.
8. Write the final results with units.

Important: You generally cannot calculate a meaningful COCOMO estimate from the project name alone. You need the estimated code size and project mode, or whatever additional inputs your question specifies.

6. Result

The estimated software development effort, development time, and average team size have been calculated using Basic COCOMO.


---

Practical 4: Use Case Diagram

1. What is a Use Case Diagram?

A Use Case Diagram shows who uses the system and what they can do with it.

It is like a map of the system's features from the user's point of view.

2. Aim

To draw a Use Case Diagram for the Library Management System.

3. Identify the actors

An actor is a person or external system that interacts with your software.

For our project:

- Student
- Librarian
- Admin

4. Identify the use cases

A use case is an action the system allows an actor to perform.

Actor	Use cases

Student	Log in, Search Books, View Borrowed Books
Librarian	Add Books, Update Books, Issue Books, Return Books, Calculate Fine
Admin	Manage Users, Generate Reports


5. Diagram: How to draw it

Use this as a guide for your exam drawing:

LIBRARY MANAGEMENT SYSTEM

 Student  ---------------- (Log In)
    |      ---------------- (Search Books)
    |      ---------------- (View Borrowed Books)
    |
 Librarian ---------------- (Add / Update Books)
    |      ---------------- (Issue Book)
    |      ---------------- (Return Book)
    |      ---------------- (Calculate Fine)
    |
 Admin    ---------------- (Manage Users)
           ---------------- (Generate Reports)

For a proper UML diagram, draw:

1. Stick figures outside the system boundary for actors.
2. A large rectangle labelled Library Management System.
3. Ovals inside the rectangle for use cases.
4. Lines connecting each actor to the relevant use cases.

The text drawing is a simplified guide, not a substitute for the standard UML symbols.

6. Software to use

You can draw the diagram on paper or use a diagramming tool such as diagrams.net if permitted.

Procedure

1. Identify the actors.
2. Identify the system functions.
3. Draw the system boundary.
4. Draw the use cases inside it.
5. Place actors outside it.
6. Connect each actor to the relevant use cases.
7. Check that the diagram matches the requirements.

7. Result

The Use Case Diagram for the Library Management System has been drawn, showing the interactions between students, librarians, administrators, and the system.

Memory trick

Actors outside, use cases inside, connections between them.


---

Practical 5: Class Diagram

1. What is a Class Diagram?

A Class Diagram represents the structure of the software.

It shows:

- Classes
- Attributes
- Methods
- Relationships between classes

Think of a class as a blueprint for a type of object.

For example, a Book class describes the information and operations associated with books.

2. Aim

To design a Class Diagram for the Library Management System.

3. Identify the classes

Look for important nouns in the project description.

For our library, the main classes are:

1. User
2. Student
3. Librarian
4. Book
5. Loan
6. Fine

4. Write attributes and methods

Class	Attributes	Example methods

User	userId, name, email	login(), logout()
Student	studentId	searchBook(), viewLoans()
Librarian	librarianId	issueBook(), returnBook()
Book	bookId, title, author, availableCopies	checkAvailability()
Loan	loanId, issueDate, dueDate, returnDate	createLoan(), closeLoan()
Fine	fineId, amount, status	calculateFine(), recordPayment()


A student or librarian can be modelled as a specialised type of user. The exact design can vary depending on the requirements.

5. Diagram structure

Draw each class as a rectangle divided into three sections:

+-------------------------+
|          Book           |
+-------------------------+
| - bookId                |
| - title                 |
| - author                |
| - availableCopies       |
+-------------------------+
| + checkAvailability()   |
+-------------------------+

The top section contains the class name, the middle contains attributes, and the bottom contains methods.

Now add the other classes and connect them.

For example:

Student 1 -------- 0..* Loan
Book    1 -------- 0..* Loan
Loan    1 -------- 0..1 Fine

These relationships illustrate that a student may have many loans, a book may appear in many loan records over time, and a loan may have an associated fine. The exact multiplicities depend on the system's design.

Important: If a library has several physical copies of the same book title, a more detailed design may include a separate BookCopy class.

6. Procedure

1. Read the project description.
2. Identify important nouns.
3. Convert suitable nouns into classes.
4. Add attributes to each class.
5. Add relevant methods.
6. Draw the class rectangles.
7. Connect related classes.
8. Add multiplicities if required.

7. Result

The Class Diagram has been designed to represent the main entities, attributes, operations, and relationships of the Library Management System.

Memory trick

Class = Noun + Data + Operations.


---

Practical 6: Activity Diagram

1. What is an Activity Diagram?

An Activity Diagram shows the step-by-step workflow of a process.

Think of it as a flowchart showing what happens from the beginning to the end of an activity.

For our project, we'll draw the workflow for issuing a library book.

2. Aim

To draw an Activity Diagram for the book issue process in the Library Management System.

3. Understand the process

When a student wants a book:

1. The student requests the book.
2. The librarian checks the student's eligibility.
3. The system checks book availability.
4. If the student is eligible and a copy is available, the book is issued.
5. The system records the issue date and due date.
6. Otherwise, the request is rejected or the student is informed that the book is unavailable.

4. Diagram

(START)
             |
             v
      Student Requests Book
             |
             v
      Check Student Eligibility
             |
             v
       <Eligible Student?>
          /         \
        No           Yes
        |             |
        v             v
   Reject Request  Check Availability
        |             |
        |             v
        |        <Book Available?>
        |           /       \
        |          No       Yes
        |          |         |
        |          v         v
        |      Inform     Issue Book
        |      Student        |
        |                     v
        |                Record Loan
        |                     |
        v                     v
          \                 /
             (END)

This is a simplified guide. When drawing it, use standard activity-diagram symbols:

- Filled circle: Start
- Rounded rectangle: Activity
- Diamond: Decision
- Arrows: Flow direction
- Final-node symbol: End

5. Procedure

1. Identify the process to be represented.
2. Write all the steps in order.
3. Identify decisions such as availability or eligibility.
4. Draw the start symbol.
5. Add activities in sequence.
6. Add decision diamonds with labelled branches.
7. Connect all steps using arrows.
8. Ensure the alternative paths lead to appropriate outcomes.

6. Result

The Activity Diagram for the book issue process has been drawn, showing the workflow and decisions involved in issuing a book.

Memory trick

Activity Diagram = Steps + Decisions + Flow.

For another project, simply change the workflow. For a hospital, it might be: Select Doctor → Check Slot → Confirm Appointment.


---

Practical 7: State Chart Diagram

1. What is a State Chart Diagram?

A State Chart Diagram shows the different states of an object throughout its lifetime.

An Activity Diagram focuses on the steps of a process. A State Chart Diagram focuses on the states of a particular object and the events that change those states.

For our library, we'll track a book loan.

2. Aim

To draw a State Chart Diagram for the book loan lifecycle in the Library Management System.

3. Identify the states

A loan can have these states:

- Requested
- Approved
- Issued
- Returned
- Rejected
- Overdue

These states represent the status of the loan transaction, not necessarily the physical book itself.

4. Diagram

(START)
                |
                v
            Requested
                |
          Approve Request
                |
                v
             Approved
                |
             Issue Book
                |
                v
              Issued
             /      \
    Due Date Passed  Book Returned
          |                |
