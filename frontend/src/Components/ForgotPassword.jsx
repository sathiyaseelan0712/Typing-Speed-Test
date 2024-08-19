import  { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Send the email to the backend to send the OTP
      const response = await axios.post('/api/send-otp', { email });
      setSuccess(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <p className="text-4xl font-bold text-white text-center mb-6 font-mono">
        Your journey to typing mastery begins here.
      </p>
      <p className="text-2xl font-bold text-yellow-400 text-center mb-6 font-mono">
        Login to Measure, Master, and Dominate!
      </p>
      <div className="p-8 rounded-lg shadow-lg w-full max-w-sm bg-transparent">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-mono">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white font-mono font-extrabold text-lg mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              style={{ border: "3px solid white" }}
            />
          </div>
          <button
            className="w-full bg-white text-black font-mono py-2 px-4 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
