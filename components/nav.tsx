import Link from 'next/link';
import ArrowBackIcon from './jsx-icons/arrow-back-icon';

const Nav = ({href, title}:{href:string, title:string}) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      <div>
        <ArrowBackIcon />
      </div>
      <h3 className="font-medium leading-6">{title}</h3>
    </Link>
  );
};

export default Nav;
