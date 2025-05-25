export default async function handler(req, res) {
  const { city } = req.query;

  try {
    if (!city) {
      return res.status(400).json({ message: 'City parameter is required' });
    }

    // Contoh: Simulasi response cuaca
    const fakeWeatherData = {
      name: city,
      main: { temp: 25 },
      weather: [{ description: 'Cerah' }],
    };

    // Kirim response sukses
    res.status(200).json(fakeWeatherData);
  } catch (error) {
    console.error(error);  // Gunakan error agar tidak unused
    res.status(500).json({ message: 'Internal server error' });
  }
}
