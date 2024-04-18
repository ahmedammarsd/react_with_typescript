interface layoutInterface {
  children: React.ReactNode;
}
const Layout = (props: layoutInterface) => {
  return <div>{props.children}</div>;
};

export default Layout;
