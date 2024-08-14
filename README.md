Tips:

1) if I will use client component inside server component is's okay, but if I'll try to do client logic in server component I'll get an error

2) if I have tree 
  serverComponent1
    serverComponent2
      serverComponent3

and then I'll trasform serverComponent1 to clientComponent1, then all my child components will transform to client as well
  clientComponent1
    clientComponent2
      clientComponent3

An error would be if SomeClientComponent returns:
  (
    clientComponent1
    serverComponent1
  )

to fix it I need wrapp this serverComponent1 to children prop, something like that:
  SomeClientComponent returns:
  (
    clientCoponent1
    {children}//here will be server component
  )

and then:
  <SomeClientComponent>
    <ServerComponent1/>
  </SomeClientComponent>