import axiosWithAuth from "../utils/axiosWithAuth"

const classService = async () => {
  const resp = await axiosWithAuth()
    .get("/class")
  return resp.data
}

export default classService
