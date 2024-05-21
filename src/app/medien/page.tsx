export default function Medien () {

  async function getTagesschau () {
    const res = await fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-bmvjjta/endpoint/data/v1',

    )

    if (!res.ok) {
      throw new Error ('Failed to fetch data')
    }
    console.log(res)
    return res.json
  }

  return (
    <div>Medien</div>
  )
}