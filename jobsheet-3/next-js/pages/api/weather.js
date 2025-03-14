export default async function handler(req, res) {
    const { city } = req.query; // Mendapatkan nama kota dari query params
    const apiKey = 'feff206daa60b539abe8fae8f2ab7f29';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod !== 200) {
        return res.status(404).json({ message: 'City not found' });
      }
  
      res.status(200).json(data); // Mengembalikan data cuaca
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }
  