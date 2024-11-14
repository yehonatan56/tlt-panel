import request from 'supertest';
import app from '../../app';

let token = '';
describe('api', function () {
    it('should return 200', async () => {
        request(app)
            .post('/auth/login')
            .send({ username: 'test', password: 'test' })
            .expect(200)
            .end((err, res) => {
                if (err) throw err;

                token = res.body.token;
            });
    });

    it('should return 401', () => {
        request(app).post('/auth/login').send({ username: 'test', password: 'wrong' }).expect(401);
    });

    it('should return 404', () => {
        request(app).post('/auth/login').send({ username: 'wrong', password: 'test' }).expect(404);
    });

    it('should return 200', () => {
        request(app).post('/auth/logout').set('Authorization', `Bearer ${token}`).expect(200);
    });

    // ----------------------------------------------

    it('create link', () => {
        request(app)
            .post('/links')
            .set('Authorization', `Bearer ${token}`)
            .send({ link: 'com' })
            .expect(200)
            .end((err, res) => {
                expect(res.body.link).toBe('');
                if (err) throw err;
            });
    });

    it('get links', () => {
        request(app).get('/links').set('Authorization', `Bearer ${token}`).expect(200);
    });
});
