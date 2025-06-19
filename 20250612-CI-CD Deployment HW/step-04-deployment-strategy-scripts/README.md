Step 4: Deployment Strategy Simulation

This folder simulates three deployment strategies using Docker Compose:

Blue/Green
- Run `blue` and `green` containers.
- Traffic would normally switch between ports using a load balancer.

Canary
- Simulate by routing only a small portion of traffic to `green`.
- Then gradually increase as it proves stable.

Rolling
- Replace containers one at a time using `docker-compose up` with new versions.
