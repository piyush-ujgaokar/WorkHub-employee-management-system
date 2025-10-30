const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Profile",
        taskDescription: "Fill out all personal details in the profile section.",
        taskDate: "2025-10-28",
        category: "Profile"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Submit Report",
        taskDescription: "Submit weekly progress report.",
        taskDate: "2025-10-30",
        category: "Report"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Call",
        taskDescription: "Attend client meeting at 4PM.",
        taskDate: "2025-10-26",
        category: "Meeting"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Push latest bug fixes to website.",
        taskDate: "2025-10-28",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Sync",
        taskDescription: "Daily team sync-up.",
        taskDate: "2025-10-27",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Design Logo",
        taskDescription: "Submit draft logo.",
        taskDate: "2025-10-25",
        category: "Design"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Docs",
        taskDescription: "Documentation for new feature.",
        taskDate: "2025-10-29",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Bugs",
        taskDescription: "Resolve pending bugs.",
        taskDate: "2025-10-28",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Review PRs",
        taskDescription: "Review team PRs.",
        taskDate: "2025-10-27",
        category: "Code Review"
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Schedule Event",
        taskDescription: "Schedule tech event.",
        taskDate: "2025-10-31",
        category: "Event"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Publish Blog",
        taskDescription: "Write and publish monthly update.",
        taskDate: "2025-10-27",
        category: "Blog"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Contact Vendor",
        taskDescription: "Reach out for invoice.",
        taskDate: "2025-10-25",
        category: "Finance"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Survey",
        taskDescription: "Design employee satisfaction survey.",
        taskDate: "2025-11-01",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Handbook",
        taskDescription: "Update company policies document.",
        taskDate: "2025-10-28",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Resolve Ticket",
        taskDescription: "Resolve support ticket #123.",
        taskDate: "2025-10-26",
        category: "Support"
      }
    ]
  }
]


  const admin= [
      {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ]
  
  

export const SetLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const GetLocalStorage=()=>{
    
    const employeeData= JSON.parse(localStorage.getItem('employees'))
    const adminData= JSON.parse(localStorage.getItem('admin'))
    
    return {employeeData,adminData}
   
}