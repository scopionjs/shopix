import axios from "axios";
export default async function handler(req, res) {
  let data = await axios.get(
    "https://api.rainforestapi.com/request?api_key=24BD41AFC510481F96FF275F7E2B6991&type=search&amazon_domain=amazon.com&search_term=fashion&sort_by=price_high_to_low"
  );
  res.json({ data: data.data.search_results });
}
