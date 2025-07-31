// Fetch and analyze the tuition data from Google Sheets
async function fetchGoogleSheetsData() {
  try {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOqFu1M-iKC8K7g6eqyeb-qt4L-Qb_Ds8b_C931-D59-Wb1gF3gE6R6b--n4hIluWs2o_7zVPRHicC/pub?output=csv",
    )
    const csvText = await response.text()

    console.log("Raw CSV Data from Google Sheets:")
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
    console.error("Error fetching Google Sheets data:", error)
  }
}

// Execute the function
fetchGoogleSheetsData()
