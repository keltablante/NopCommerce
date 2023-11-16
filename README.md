*Cypress Example - NOPCommerce*

This project consists of automated testing of the cases listed below:  

TC#1: Add discount (Basic)

	-Open Browser
	-Launch nopCommerce App
	-Validate landing page
	-Perform Login
	-Validate Dashboard
	-Navigate to Discounts under Promotions
	-Add new Discount using Basic mode
	-Save
	-Validate newly added discount
	-Logout
  
TC#2: Add discount (Advanced)

	-Open Browser
	-Launch nopCommerce App
	-Validate landing page
	-Perform Login
	-Validate Dashboard
	-Navigate to Discounts under Promotions
	-Add new Discount using Advanced mode
	-Save
	-Validate newly added discount
	-Logout
  
TC#3: Search via coupon code && discount name - validate discount

	-Open Browser
	-Launch nopCommerce App
	-Validate landing page
	-Perform Login
	-Validate Dashboard
	-Navigate to Discounts under Promotions
	-Search discount using Coupon & Discount field
	-Validate result
	-Logout
  
-------------------------
#1. Upload file (nopCommerce > Configuration > Settings > PDF > Upload file)

	-Open Browser
	-Launch nopCommerce App
	-Validate landing page
	-Perform Login
	-Validate Dashboard
	-Navigate to Configurations > Settings > General Settings > PDF
	-Upload a PDF file
	-Validate if upload is successful
	-Logout
  
#2. Date picker (included in test case #2)

#3. API Testing

    -TC#1: Create new Repo in Github, validate and delete
    -TC#2: List and validate existing and recently deleted repo


Instruction:

1. Download git bash: https://gitforwindows.org/ || https://git-scm.com/downloads

2. Setup SSH using this link: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

3. Click "Generating a new SSH key and adding it to the ssh-agent"

4. Clone the project to your local machine using SSH

5. Download and install node.js: https://nodejs.org/en/download

6. Download and install Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress

7. Open cypress using $npx cypress open and navigate to the project folder

8. Navigate to the spec files (.cy.js) under cypress/E2E/Tests and execute 

9 Or run the tests headlessly with reports via terminal using the scripts provided under package.json
