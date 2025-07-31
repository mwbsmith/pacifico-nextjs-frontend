// Fetch and analyze the tuition data from the CSV
async function fetchTuitionData() {
  try {
    const response = await fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tuition%20and%20fees%20-%20Sheet1-7FJATrNCCfexrDwGO8RAIhHHh3dbv3.csv",
    )
    const csvText = await response.text()

    console.log("Raw CSV Data:")
    console.log(csvText)

    // Parse CSV manually
    const lines = csvText.trim().split("\n")
    const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""))

    console.log("Headers:", headers)

    const data = []
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",").map((v) => v.trim().replace(/"/g, ""))
      const row = {}
      headers.forEach((header, index) => {
        row[header] = values[index] || ""
      })
      data.push(row)
    }

    console.log("Parsed Data:")
    console.log(JSON.stringify(data, null, 2))

    return data
  } catch (error) {
    console.error("Error fetching tuition data:", error)
  }
}

// Execute the function
fetchTuitionData()
