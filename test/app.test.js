const request = require('supertest')
const { faker } = require('@faker-js/faker')

const app = require('../app')

describe('Thes the creation of the user', () => {
    test('It should responde success', done => {
        const randomEmail = faker.internet.email()
        const randonName = faker.name.fullName()

        request(app)
            .post('/user')
            .set('Accept', 'application/json')
            .send({email: randomEmail, name: randonName})
            .then(response => {
                expect(response.statusCode).toBe(201)
                expect(response.body.email).toEqual(randomEmail)
                expect(response.body.name).toEqual(randonName)
                done()
            })
    })
})
