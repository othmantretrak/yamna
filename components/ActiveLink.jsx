import Link from "next/link";
import { useRouter } from "next/router";

function ActiveLink({ name, href }) {
  const router = useRouter();
  const style = router.asPath === href ? "active" : "";
  //console.log({ router });
  return (
    <Link href={href}>
      <a className={style}>{name}</a>
    </Link>
  );
}

export default ActiveLink;
