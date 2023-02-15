# Maxwell QA Automation Code Exercise

Requirements for this task:
#### Create a smoke test to verify web page functionality
Using Selenium, Playwright, or any other open source automated testing framework, verify the demo account landing page at https://snap.modernemortgage.com/home/mobile-test
* Test 1: The page displays an email address for the Lender.
* Test 2: After clicking the "Apply Now" button, the resulting page displays the same email address as in Test 1.

#### Setup
1. Clone this repository: `git clone https://github.com/danielelli/maxwell-qa-assignment.git`
2. Go to the within the cloned repo, go to the test directory and run playwright test: <br>
`cd maxwell-qa-assignment && cd test && npx playwright test`

#### Considerations for this assignments
- For this project, I wanted to get hands-on with the testing framework utilized within Maxwell so I learned the basics of Playwright using the Playwright Documentation if I ever needed assistance.
- To ensure I was picking the correct element, I noticed that in the Documentation itself Playwright recommended using text locators for non interactive elements like `div`, `span`, `p`. However in the case of looking for a link element `a`, they suggest role locators so I made sure to consider that going into this assignment.

#### Video Demo of Tests Running Successfully:

https://user-images.githubusercontent.com/90986300/219134139-caa67d93-9095-4494-aeaa-0a3ed80ae0a1.mp4

#### Summary
In this coding assignment, besides setting up a small developer environment and installing the packages necessary to complete the project. It only took me an hour and a half to work through the two test case requirements given, read through the Playwright documentation, and create the functional test cases along with debugging and making sure my code was concise, commented, and typo-free.

I enjoyed being able to learn Playwright and get hands-on experience with it for this coding assignment.
