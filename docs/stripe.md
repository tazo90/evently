# Local development

https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local
https://stripe.com/docs/stripe-cli

scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
scoop install stripe

stripe login

stripe listen --forward-to localhost:3000/api/webhook/stripe

stripe trigger checkout.session.completed
