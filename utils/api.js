
export async function sendContactForm(data) {
    try {
      const response = await fetch('https://portfolio-backend-c95e.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
    }
  }
  