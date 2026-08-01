# Database Schema

## Database

**Database Name:** SkillSyncDB

**Database:** MongoDB Atlas

---

# Collections

The SkillSync platform uses the following collections:

1. Users
2. Skills
3. MentorApplications
4. MentorSkills
5. Sessions
6. Bookings
7. Messages
8. Notifications
9. Leaderboard
10. Assessments

---

# 1. Users Collection

Stores information about all registered users.

| Field | Type | Description |
|--------|------|-------------|
| fullName | String | User's full name |
| registerNumber | String | College register number |
| email | String | Unique email address |
| password | String | Encrypted password |
| department | String | Department |
| year | Number | Academic year |
| role | String | user / faculty / admin |
| profileImage | String | Profile image URL |
| skillsLearning | Array | Skills currently learning |
| xp | Number | Experience points |
| level | Number | Current level |
| badges | Array | Earned badges |
| availability | Array | Mentor availability slots |
| createdAt | Date | Record created date |
| updatedAt | Date | Last updated date |

---

# 2. Skills Collection

Stores all available skills.

| Field | Type |
|--------|------|
| skillName | String |
| category | String |
| description | String |
| difficulty | String |
| icon | String |
| createdBy | ObjectId |
| isActive | Boolean |
| createdAt | Date |
| updatedAt | Date |

---

# 3. MentorApplications Collection

Stores mentor applications submitted by users.

| Field | Type |
|--------|------|
| userId | ObjectId |
| skillId | ObjectId |
| assessmentScore | Number |
| status | Pending / Approved / Rejected |
| facultyId | ObjectId |
| remarks | String |
| appliedAt | Date |
| approvedAt | Date |

---

# 4. MentorSkills Collection

Stores faculty-approved mentor skills.

| Field | Type |
|--------|------|
| mentorId | ObjectId |
| skillId | ObjectId |
| rating | Number |
| totalStudents | Number |
| totalSessions | Number |
| isApproved | Boolean |
| approvedBy | ObjectId |

---

# 5. Sessions Collection

Stores mentoring sessions.

| Field | Type |
|--------|------|
| mentorId | ObjectId |
| skillId | ObjectId |
| title | String |
| description | String |
| date | Date |
| startTime | String |
| endTime | String |
| maxStudents | Number |
| availableSeats | Number |
| meetingLink | String |
| status | Upcoming / Ongoing / Completed / Cancelled |

---

# 6. Bookings Collection

Stores session bookings.

| Field | Type |
|--------|------|
| sessionId | ObjectId |
| mentorId | ObjectId |
| studentId | ObjectId |
| skillId | ObjectId |
| bookingDate | Date |
| status | Pending / Confirmed / Cancelled / Completed |
| feedback | String |
| rating | Number |

---

# 7. Messages Collection

Stores chat messages.

| Field | Type |
|--------|------|
| senderId | ObjectId |
| receiverId | ObjectId |
| bookingId | ObjectId |
| message | String |
| isRead | Boolean |
| createdAt | Date |

---

# 8. Notifications Collection

Stores user notifications.

| Field | Type |
|--------|------|
| userId | ObjectId |
| title | String |
| message | String |
| type | String |
| isRead | Boolean |
| createdAt | Date |

---

# 9. Leaderboard Collection

Stores leaderboard statistics.

| Field | Type |
|--------|------|
| userId | ObjectId |
| xp | Number |
| level | Number |
| badge | String |
| completedSessions | Number |
| mentorRating | Number |
| department | String |

---

# 10. Assessments Collection

Stores mentor assessment results.

| Field | Type |
|--------|------|
| userId | ObjectId |
| skillId | ObjectId |
| score | Number |
| totalQuestions | Number |
| percentage | Number |
| passed | Boolean |
| completedAt | Date |

---

# Database Workflow

```text
User Registration
        │
        ▼
Users Collection
        │
        ▼
Apply as Mentor
        │
        ▼
MentorApplications
        │
        ▼
Assessment
        │
        ▼
Faculty Approval
        │
        ▼
MentorSkills
        │
        ▼
Create Session
        │
        ▼
Sessions
        │
        ▼
Student Booking
        │
        ▼
Bookings
        │
        ▼
Messages
        │
        ▼
XP, Badges & Leaderboard
```

---

# Database Relationships

- One User can learn multiple Skills.
- One User can apply to mentor multiple Skills.
- One Skill can have multiple verified Mentors.
- One Mentor can create multiple Sessions.
- One Session can have multiple Bookings.
- One Booking enables communication between Mentor and Student.
- Leaderboard rankings are generated based on XP, completed sessions, and mentor ratings.

---

# Database Technology

- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Authentication:** JWT + bcrypt
- **Backend:** Node.js + Express.js
