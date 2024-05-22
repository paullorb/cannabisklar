import Link from "next/link";

export default function Gesundheit () {
  return (
    <div>
      <h1>Gesundheit</h1>
      <h2>Suchtprävention</h2>
      <div>Schule</div>
      <p>Durch eine Förderung der sozialen Kompetenz bei Kindern</p>
      <p>Sie für die soziale Einflussnahme durch Gleichaltrige zu sensibilisieren</p>
      <div>Familie</div>
      <div>Hochschule</div>
      <div>Medien</div>
      <div>Gesundheitseinrichtungen</div>
      <div>Kommune</div>
      <h5>Nützliche Links:</h5>
        <Link href="https://shop.bzga.de/pdf/3495.pdf">Quelle</Link>
        <Link href="https://www.cannabispraevention.de/service/infomaterialien/">CannabisPrävention</Link>
        <Link href="https://www.infos-cannabis.de/">Infos-Cannabis.de</Link>
    </div>
  );
}