import React from 'react';
import {Contact} from './components/contact';

const App = () => {
  return (
    <div>
      <Contact
        name="John Doe"
        profileImage="https://tse1.mm.bing.net/th?id=OIP.unTJoxXST82qzPQgsJGzFQHaLH&pid=Api&rs=1&c=1&qlt=95&w=80&h=120"
        isOnline={true}
      />
      <Contact
        name="Jane Smith"
        profileImage="https://tse1.mm.bing.net/th?id=OIP.gO6CofLnwKdnr70seIbNAgHaE8&pid=Api&rs=1&c=1&qlt=95&w=149&h=99"
        isOnline={false}
      />
      <Contact
        name="Alice Johnson"
        profileImage="https://tse1.mm.bing.net/th?id=OIP.U7sVEkIaqVNEJ6Sw5i9aoQHaE8&pid=Api&rs=1&c=1&qlt=95&w=149&h=99"
        isOnline={true}
      />
    </div>
  );
};

export default App;
