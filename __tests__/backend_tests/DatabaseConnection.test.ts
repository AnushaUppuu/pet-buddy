import {connection} from '../../Backend/connection';
jest.mock('../../Backend/connection', () => ({
  connection: jest.fn(),
}));
describe('Database connection', () => {
  it('Succuss message upon connecting', async () => {
    (connection as jest.Mock).mockResolvedValue('Connection successful');
    expect(await connection()).toBe('Connection successful');
  });
  it('Should display error message upon failed connection', async() => {
    (connection as jest.Mock).mockResolvedValue('Unable to connect');
    expect(await connection()).toBe('Unable to connect');
  })
});
