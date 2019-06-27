export default class RestoService {
  getMenuItems = async () => {
    const res = await fetch(`http://localhost:3000/src/db.json`);
    // if (!res.ok) {
    //   throw new Error(`Could not fetch${url}, recived ${res.status}`);
    // }
    return await res.json();
  };

  // getMenuItems() {
  //   return [];
  // }
}
