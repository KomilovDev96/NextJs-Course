import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { Button, Htag, Ptag, Reating, Tag } from '../components';
import { MenuItem } from '../iterfaces/menu.Iterfaces';
import { withLayout } from '../layout/Layout';
import { RootObject } from '../iterfaces/test.interfaces';
function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4)
  console.log(menu);
  console.log(firstCategory);
  return (
    <>
      <Htag tag="h1">Teks</Htag>
      <Button appearance='primary' arrow='down'>Click</Button>
      <Button appearance='ghost' arrow='right'>Click</Button>
      <Ptag size="l">Бол</Ptag>
      <Ptag size="s">sred</Ptag>
      <Ptag>mal</Ptag>
      <Tag size="s">s - : </Tag>
      <Tag size="m">M - : </Tag>
      <Tag color="red">red - : </Tag>
      <Tag color="green">green - : </Tag>
      <Tag color="grey">grey - : </Tag>
      <Tag color="primary">grey - : </Tag>
      <Reating rating={rating} isEditable setRating={setRating} />
    </>
  )
}


export default withLayout(Home)

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategory
  })
  return {
    props: {
      menu
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  posts: RootObject[]
  firstCategory: number;
}