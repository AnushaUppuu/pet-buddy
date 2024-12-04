import {connection, closeConnection} from '../../Backend/connection';
import mongoose, {connect} from 'mongoose';

// jest.mock('../../Backend/connection', () => ({
//   connection: jest.fn(),
// }));
jest.mock('mongoose', () => ({
  connect: jest.fn(),
  connection: jest.fn(),
}));
describe('Database connection', () => {
  beforeEach(async () => {
    console.log = jest.fn();
    await connection();
  });
  afterEach(async () => {
    await closeConnection();
  });
  it('Succuss message upon connecting', async () => {
    (mongoose.connect as jest.Mock).mockResolvedValueOnce(true);
    expect(console.log).toHaveBeenCalledWith('Connected to the database');
  });
  it('Should display error message upon failed connection', async () => {
    (connect as jest.Mock).mockRejectedValueOnce(
      new Error('Connection failed'),
    );
    expect(console.log).toHaveBeenCalledWith('Unable to connect');
  });
});
