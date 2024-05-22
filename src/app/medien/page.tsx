import { getPosts } from '../../../_actions/postAction'
import styles from './Medien.module.css'
import { IPost } from '../../../interfaces/IPost'


export default async function Medien (): Promise<JSX.Element> {
  const {data, errMsg } = await getPosts();
  console.log(data)

  if(errMsg) {
    return <h1>{errMsg}</h1>
  } 

  return (
    <section className={styles.container}>Medien
      <div className={styles.media}>
      <div className={styles.tagesschau}>
        <h1>Tagesschau</h1>
        {data?.map((item: IPost) => (
          <h1 key={item._id as string}>{item.msg}</h1>
        ))}
      </div>
      </div>
    </section>
  )
}