const request = require('supertest');
const { app } = require('./index');

describe('server', () => {
  it('should not allow create post with url in body', async () => {
    const response = await request(app).post('/link');
    expect(response.status).toEqual(400);
  });

  it('should return 404 when trying to delete non existing link', async () => {
    const response = await request(app).delete('/link/id');
    expect(response.status).toEqual(404);
  });

  it('should create link', async () => {
    const url = 'https://www.ynet.co.il';
    let response = await request(app).post('/link').send({ url });
    expect(response.status).toEqual(201);
    response = await request(app).get('/links');
    expect(response.body.length).toEqual(1);
    expect(response.body[0].url).toEqual(url);
  });

  it('should delete link', async () => {
    await request(app).post('/link').send({ url: 'https://www.ynet.co.il' });
    let response = await request(app).get('/links');
    const id = response.body[0].id;
    response = await request(app).delete(`/link/${id}`);
    expect(response.status).toEqual(204);
    response = await request(app).get('/links');
    expect(response.body.length).toEqual(0);
  });
});
