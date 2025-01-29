export const postComment = (text, token) => {
  const url = "https://striveschool-api.herokuapp.com/api/posts/"
  const body = { text }

  return async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        throw new Error(`Errore ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      console.log("Commento pubblicato con successo:", data)
      return data
    } catch (error) {
      console.error("Errore nella pubblicazione del commento:", error)
      throw error
    }
  }
}

export default postComment
