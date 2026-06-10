const AVATAR_URL =
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80'

export default function AccountSettings() {
  const stored = JSON.parse(localStorage.getItem('popx_user') || 'null')
  const user = stored || { name: 'Marry Doe', email: 'Marry@Gmail.Com' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="account-header">Account Settings</div>
      <div className="account-body">
        <div className="profile">
          <div className="avatar-wrap">
            <img className="avatar" src={AVATAR_URL} alt="Profile" />
            <span className="avatar-camera" aria-hidden="true">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4l1.5-2h3L15 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="13" r="3.5" stroke="white" strokeWidth="2" />
              </svg>
            </span>
          </div>
          <div className="profile-info">
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
          </div>
        </div>

        <p className="account-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  )
}
