import { gql } from '@apollo/client';
import client from '@/apollo-client';

export async function getPosts() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          postTitle
          createdAt
          postContent {
            markdown
            html
          }
          slug
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
