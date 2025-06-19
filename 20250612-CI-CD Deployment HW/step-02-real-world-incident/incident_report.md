Step 2: Real-World Deployment Incident Report

Incident: Facebook Outage – October 4, 2021

This incident was a good reminder that even the biggest tech companies aren’t immune to deployment mistakes. On October 4, 2021, Facebook (along with Instagram and WhatsApp) went completely offline for over 6 hours worldwide.

What happened:
During a routine update, Facebook engineers made a configuration change that accidentally removed their backbone routers from the internet. Because these routers controlled how their data centers talked to each other, everything just... stopped. Users couldn’t load the apps, and even internal systems like employee badges and video conferencing failed.

Why it broke:
The problem came from a misconfiguration in the Border Gateway Protocol (BGP) — basically how internet networks find and talk to each other. Facebook’s servers disappeared from the internet because the routing tables were wiped. Even DNS (the phone book of the internet) wasn’t reachable.

Who was impacted:
- Over 3.5 billion users were affected.
- Small businesses that rely on Facebook Ads lost money.
- Facebook employees couldn’t log into internal tools to fix it.

How they fixed it:
Engineers had to physically travel to their data centers and restore access. Since remote access was down, they literally had to be onsite to get systems running again.

What they learned:
- More safeguards were added to prevent similar BGP changes.
- They improved internal tools to make recovery faster.
- They acknowledged the need for better staging and review of major infrastructure updates.

Takeaway:
Even a small misstep in deployment can knock out systems at a global scale. This showed the importance of automation, monitoring, rollback plans — and above all, validating big infrastructure changes carefully.
