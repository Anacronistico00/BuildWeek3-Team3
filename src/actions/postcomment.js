export const postComment = (token, text) => {
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
      return data;
    } catch (error) {
      console.error('Errore nella pubblicazione del commento:', error);
      throw error;
    }
  };
};

export default postComment;

export const postImage = (image) => {
  return async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/:postId`,
        {
          method: 'POST',
          body: JSON.stringify(image),
        }
      );
      if (!response.ok) {
        throw new Error('Errore nel caricamento dell’immagine');
      }
      const data = await response.json();
      console.log('Commento pubblicato con successo:', data);
      return data;
    } catch (error) {
      console.log('Errore nel caricamento dell’immagine:', error);
    }
  };
};
