document.addEventListener('DOMContentLoaded', function () {
    const tasks = [
        { category: 'HTML', description: 'Task 1: Basic webpage', date: '2023-10-24', link: 'file:///C:/Users/Pixel/Desktop/HTML-Task/task-1.html' },
        { category: 'HTML', description: 'Task 2: Webpage about Petra', date: '2023-10-24', link: 'file:///C:/Users/Pixel/Desktop/HTML-Task/task-2.html' },
        { category: 'HTML', description: 'Task 3:  Online Profile', date: '2023-10-24', link: 'file:///C:/Users/Pixel/Desktop/HTML-Task/task-3.html' },
        { category: 'HTML', description: 'Task 4: Personal Information Form', date: '2023-10-24', link: 'file:///C:/Users/Pixel/Desktop/HTML-Task/task-4.html' },
        { category: 'HTML', description: 'Task 5: Multimedia Showcase', date: '2023-10-24', link: 'file:///C:/Users/Pixel/Desktop/HTML-Task/task-5.html' },
        { category: 'HTML', description: 'Task 6: Text Formatting Showcase', date: '2023-10-24', link: 'file:///C:/Users/Pixel/Desktop/HTML-Task/task-6.html' },
        { category: 'HTML', description: 'Task 7: Table Demonstrations', date: '2023-10-24', link: 'file:///C:/Users/Pixel/Desktop/HTML-Task/task-7.html' },

        { category: 'CSS', description: 'Task 1:  Details Table', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-1.html' },
        { category: 'CSS', description: 'Task 2:  Linkdin Login Page', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-2.html' },
        { category: 'CSS', description: 'Task 2: Login Page with Navigation', date: '2023-11-25', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-2.1.html' },
        { category: 'CSS', description: 'Task 2: Modern Login Form', date: '2023-11-25', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-2.2.html' },
        { category: 'CSS', description: 'Task 2:  User Login Form', date: '2023-11-25', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-2.3.html' },
        { category: 'CSS', description: 'Task 3:  Modern Sign Up Form', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-3.html' },
        { category: 'CSS', description: 'Task 3:  Member Login Form', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-3.1.html' },

        { category: 'CSS', description: 'Task 4:  Website Template', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-4.html' },
        
        { category: 'CSS', description: 'Task 4:  Registration Form', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-4.1.html' },
        { category: 'CSS', description: 'Task 4:  Contact Form', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-4.2.html' },

        { category: 'CSS', description: 'Task 5:  Floating Article Viewer', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-5.html' },
        { category: 'CSS', description: 'Task 5:  Styled Content Boxes with Diverse Formatting', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-5.1.html' },
        { category: 'CSS', description: 'Task 5:  Fixed Image with Scrollable Content', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-5.2.html' },

        { category: 'CSS', description: 'Task 6:  Flexbox Showcase', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-6.html' },
        { category: 'CSS', description: 'Task 6:  Image Grid', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-6.1.html' },
        { category: 'CSS', description: 'Task 6:  Colorful Grid', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-6.2.html' },
        { category: 'CSS', description: 'Task 6:  Colorful Grid Layout', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-6.3.html' },
        { category: 'CSS', description: 'Task 6:  Colorful Flexbox Layout', date: '2023-10-28', link: 'file:///C:/Users/Pixel/Desktop/CSS-Task/task-6.4.html' },

        { category: 'Portfolio', description: 'Task 1: Create a personal portfolio', date: '2023-11-02', link: 'https://ayatweme.github.io/Portfolio/' },

        { category: 'JS', description: 'Task 1: Calculator', date: '2023-11-05', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/firstTask/task-1.html' },
        { category: 'JS', description: 'Task 1: Grading Program', date: '2023-11-05', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/firstTask/task-2.html' },
        { category: 'JS', description: 'Task 1: Equation with π', date: '2023-11-05', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/firstTask/task-3.html' },
        { category: 'JS', description: 'Task 1: If Statement Example', date: '2023-11-05', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/firstTask/task-4.html' },
        { category: 'JS', description: 'Task 2: Month Converter', date: '2023-11-07', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/secondTask/question1.html' },
        { category: 'JS', description: 'Task 2: Number Triangle Generator', date: '2023-11-07', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/secondTask/question2.html' },
        { category: 'JS', description: 'Task 2: Multiples of 13 Finder', date: '2023-11-07', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/secondTask/question3.html' },
        { category: 'JS', description: 'Task 2: Simple Multiplication Function', date: '2023-11-07', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/secondTask/question4.html' },
        { category: 'JS', description: 'Task 2: Triangle Area Calculator', date: '2023-11-07', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/secondTask/question5.html' },
        { category: 'JS', description: 'Task 2: Pandigital Number Checker', date: '2023-11-07', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/secondTask/question6.html' },
        { category: 'JS', description: 'Task 2: Favorite Drink Price Calculator', date: '2023-11-07', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/secondTask/question7.html' },
        { category: 'JS', description: 'Task 2: Full Name Generator', date: '2023-11-07', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/secondTask/question8.html' },
        { category: 'JS', description: 'Task 2: Functions', date: '2023-11-07', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/secondTask/function.html' },

        { category: 'JS', description: 'Task 3: Arrays', date: '2023-11-12', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/thirdTask/Arrays2.html' },

        { category: 'JS', description: 'Task 4: forEach', date: '2023-11-12', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/forthTask/forEach.html' },
        { category: 'JS', description: 'Task 4: Map', date: '2023-11-12', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/forthTask/map.html' },

        { category: 'JS', description: 'Task 5: Click Event', date: '2023-11-17', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/fifthTask/task1.html' },
        { category: 'JS', description: 'Task 5: Show and Hide Example', date: '2023-11-17', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/fifthTask/task2.html' },
        { category: 'JS', description: 'Task 5: Password Checker', date: '2023-11-17', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/fifthTask/task3.html' },
        { category: 'JS', description: 'Task 5: Show and Hide Example', date: '2023-11-17', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/fifthTask/task4.html' },
        { category: 'JS', description: 'Task 5: Styled Text Input', date: '2023-11-17', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/fifthTask/task5.html' },
        { category: 'JS', description: 'Task 5: Color Changing Box', date: '2023-11-17', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/fifthTask/task6.html' },

        { category: 'JS', description: 'Task 6: Local Storage', date: '2023-11-16', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/sixthTask/task1.html' },
        { category: 'JS', description: 'Task 6: Session Storage', date: '2023-11-16', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/sixthTask/task2.html' },
        { category: 'JS', description: 'Task 6: User Registration and Login', date: '2023-11-16', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/sixthTask/task3.html' },
        { category: 'JS', description: 'Task 7: JSON', date: '2023-11-16', link: 'file:///C:/Users/Pixel/Desktop/JS-Task/seventhTask/json.html' },

    ];

    const timelineContainer = document.getElementById('timelineContainer');

    // Function to create a timeline item with a clickable link
    function createTimelineItem(task) {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        timelineItem.innerHTML = `
            <h3>${task.category} Task</h3>
            <p>${task.description}</p>
            <span>${task.date}</span>
            <a href="${task.link}" target="_blank">Open Task</a>
        `;
        return timelineItem;
    }

    // Function to display tasks in the timeline grouped by category
    function displayTasksInTimeline() {
        const categories = {};

        // Group tasks by category
        tasks.forEach(task => {
            if (!categories[task.category]) {
                categories[task.category] = [];
            }
            categories[task.category].push(task);
        });

        // Display tasks in the timeline by category
        for (const category in categories) {
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('category-container');

            const categoryTimeline = document.createElement('div');
            categoryTimeline.classList.add('category-timeline');

            categories[category].forEach(task => {
                const timelineItem = createTimelineItem(task);
                categoryTimeline.appendChild(timelineItem);
            });

            categoryContainer.innerHTML = `<h2>${category} Tasks</h2>`;
            categoryContainer.appendChild(categoryTimeline);
            timelineContainer.appendChild(categoryContainer);
        }
    }

    // Display tasks in the timeline on page load
    displayTasksInTimeline();
});
