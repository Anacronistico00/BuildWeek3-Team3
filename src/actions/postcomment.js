export const postComment = (token, text, img) => {
  const url = 'https://striveschool-api.herokuapp.com/api/posts/';
  const body = { text };

  return async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`Errore ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Commento pubblicato con successo:', data);

      if (img) {
        let formData = new FormData();
        formData.append('post', img);
        const response2 = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/${data._id}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: formData,
          }
        );
        if (!response2.ok) {
          throw new Error('Errore nel caricamento dell’immagine');
        }
      }

      return data;
    } catch (error) {
      console.error('Errore nella pubblicazione del commento:', error);
      throw error;
    }
  };
};

export default postComment;
