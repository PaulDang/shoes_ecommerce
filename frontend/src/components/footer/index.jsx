import dayjs from "dayjs";

export const Footer = () => {
  return (
    <footer className="text-sm p-3 relative right-0 bottom-0 text-center">
      <aside>
        <p>© {dayjs().year()} All rights reserved.</p>
      </aside>
    </footer>
  );
};
