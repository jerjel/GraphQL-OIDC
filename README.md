# Graph QL Basics and OIDC implementation using Okta

This was a self learning project based on the okta blog; 
https://developer.okta.com/blog/2021/10/22/angular-graphql

### Issues Faced:
###### `ng add apollo-angular` threw error. 
I had to downgrade the version from 3.x to 'ng add apollo-angular@^2.0.0'

###### `ng serve` for client threw error.
I was using node ver 17.x and I had to add additional config to make it work.
`export NODE_OPTIONS=--openssl-legacy-provider`

### Missing pieces from checked-in code:
Okta client id and Issuer URL's in auth.js(server) and app.module.ts(client)

