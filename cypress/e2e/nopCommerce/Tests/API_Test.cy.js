

describe('GitHUB Repo', ()=>{

    var authToken = "ghp_iUT71nMmMbsvwGZy"
    var key = "74CLd5OKdx46OV16BcJG"
    var fetchRepoName = ""
    var id = 75958757
    var ownerLogin = "keltablante"

    it('TC#1: Create new Repo in Github, validate and delete', () => {
        //create new repo
        cy.request({
            method: "POST", 
            url: "https://api.github.com/user/repos",
            body: 	{ "name": "testRepoName" },
            headers: {
                        "Content-Type" : "application/json",
                        "Authorization": "Bearer " + authToken + key
                    }
            })
            .then((apiresult) => {
                cy.log(apiresult)
                expect(apiresult.status).to.eq(201)

            const repo = apiresult.body
                expect(repo.name).to.eql("testRepoName")
                expect(repo.owner.id).to.eql(id)
                expect(repo.owner.login).to.eql(ownerLogin)

        // delete the newly created repository
        cy.request({
            method: "DELETE",
            url: `https://api.github.com/repos/${ownerLogin}/testRepoName`,
            headers: {
            "Authorization": "Bearer " + authToken + key
            }
        })
        .then((apiresult) => {
            cy.log(apiresult);
            expect(apiresult.status).to.eq(204)
        })
        })
    })


    it('TC#2: List and validate existing and recently deleted repo', () => {
        cy.request({
            method: "GET", 
            url: "https://api.github.com/user/repos",
            headers: { "Authorization" : "Bearer "+ authToken + key }
        })
        .then((apiresult) => {
            expect(apiresult.status).to.eq(200)
            expect(apiresult.body[0].full_name).to.eql('keltablante/Capstone')

            // list all repo name and validate
            apiresult.body.forEach((repo) => {
                cy.log(repo.name);
                expect(repo.owner.id).to.eql(id)
                expect(repo.owner.login).to.eql(ownerLogin)
                //Verify that the previously created Repo is deleted and is not existing in the list
                expect(repo.name).to.not.contain('testRepoName')
              });
        })
    })


})