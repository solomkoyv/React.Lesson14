export default class RestoService {
  getMenuItems = async () => {
    const res = await fetch(`http://localhost:3000/menu`);
    console.log(res);
    if (!res.ok) {
      throw new Error(`Could not fetch, recived ${res.status}`);
    }
    return await res.json();
  };

  // getMenuItems() {
  //   return [];
  // }
}
