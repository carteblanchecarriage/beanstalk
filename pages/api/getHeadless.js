import { gql } from '@apollo/client';
import client from '@/apollo-client';

export async function getPosts() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts(last: 20) {
          postTitle
          createdAt
          postContent {
            markdown
            html
          }
          slug
          postPreview
          featureImage {
            height
            width
            url
          }
        }
      }
    `,
    fetchPolicy: 'no-cache',
  });
  console.log(data.posts);

  return data.posts;
}
