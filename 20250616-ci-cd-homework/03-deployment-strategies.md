# Deployment Strategy Comparison

## Blue/Green Deployment
Blue/Green deployment involves maintaining two production environments. The new version is deployed to the “green” environment while the “blue” remains live. Once verified, traffic is routed to green.

**Pros:**  
- Easy rollback  
- Minimal downtime

**Use Case:**  
E-commerce sites needing instant rollback

---

## Canary Deployment
Canary deployment gradually rolls out updates to a small percentage of users before a full release.

**Pros:**  
- Safer gradual rollout  
- Catch issues early

**Use Case:**  
Social media or SaaS platforms testing new features

---

## Rolling Deployment
Rolling deployment updates the application