// export default async function handler(req, res) {
//   const { city } = req.query;

//   try {
//     if (!city) {
//       return res.status(400).json({ message: 'City parameter is required' });
//     }

//     // Contoh data cuaca simulasi
//     const fakeWeatherData = {
//       name: city,
//       main: { temp: 25 },
//       weather: [{ description: 'Cerah' }],
//     };

//     res.status(200).json(fakeWeatherData);
//   } catch (_error) {
//     console.error(_error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }
