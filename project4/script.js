

//         next


        // Card data management
let cards = [];
let currentIndex = 0;

// Load cards from localStorage on page load
function loadCards() {
    const savedCards = localStorage.getItem('profileCards');
    if (savedCards) {
        cards = JSON.parse(savedCards);
    } else {
        // Default card
        cards = [{
            id: Date.now(),
            imageUrl: '',
            fullName: 'Fatima Uma',
            homeTown: 'Singapore',
            purpose: '',
            category: '',
            bookings: 3
        }];
        saveCards();
    }
    renderCards();
}

// Save cards to localStorage
function saveCards() {
    localStorage.setItem('profileCards', JSON.stringify(cards));
}

// Render cards in the UI
function renderCards() {
    const container = document.querySelector('.container');
    
    // Remove existing cards except controls
    const existingCards = container.querySelectorAll('.card');
    existingCards.forEach(card => card.remove());
    
    // Calculate which cards to show (current and 2 below)
    const visibleCards = cards.slice(currentIndex, currentIndex + 3);
    
    // Insert cards after left-controls
    const leftControls = container.querySelector('.left-controls');
    
    visibleCards.forEach((cardData, index) => {
        const cardElement = createCardElement(cardData, index);
        leftControls.insertAdjacentElement('afterend', cardElement);
    });
    
    // Update button states
    updateNavigationButtons();
}

// Create a card element
function createCardElement(cardData, stackIndex) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.transform = `translateY(${stackIndex * 20}px)`;
    card.style.opacity = stackIndex === 0 ? '1' : `${1 - stackIndex * 0.15}`;
    card.style.scale = `${1 - stackIndex * 0.05}`;
    card.style.zIndex = `${100 - stackIndex}`;
    
    // Get category color
    const categoryColor = getCategoryColor(cardData.category);
    
    card.innerHTML = `
        <div class="profile-section">
            <div class="avatar" style="background: ${cardData.imageUrl ? `url(${cardData.imageUrl}) center/cover` : 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'}"></div>
            ${stackIndex === 0 ? `<button class="delete-card-btn" onclick="deleteCard(${cardData.id})">🗑️</button>` : ''}
        </div>
        
        <div class="profile-info">
            <h2 class="name">${cardData.fullName}</h2>
            
            <div class="details">
                <span class="label">Home town</span>
                <span class="value">${cardData.homeTown}</span>
            </div>
            
            <div class="details">
                <span class="label">Bookings</span>
                <span class="value">${cardData.bookings} times</span>
            </div>
            
            ${cardData.purpose ? `
            <div class="details">
                <span class="label">Purpose</span>
                <span class="value">${cardData.purpose}</span>
            </div>
            ` : ''}
            
            ${cardData.category ? `
            <div class="category-badge" style="background: ${categoryColor}">
                ${cardData.category}
            </div>
            ` : ''}
        </div>

        <div class="actions">
            <button class="btn btn-call">
                <svg class="phone-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call
            </button>
            <button class="btn btn-message">Message</button>
        </div>
    `;
    
    return card;
}

// Get category color
function getCategoryColor(category) {
    const colors = {
        urgent: '#b565d8',
        important: '#ff9f43',
        emergency: '#ff5252',
        noRush: '#26c6da'
    };
    return colors[category] || '#666';
}

// Navigation functions
function moveUp() {
    if (currentIndex > 0) {
        currentIndex--;
        renderCards();
    }
}

function moveDown() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        renderCards();
    }
}

// Update navigation button states
function updateNavigationButtons() {
    const upBtn = document.querySelectorAll('.control-btn')[1];
    const downBtn = document.querySelectorAll('.control-btn')[2];
    
    if (upBtn) {
        upBtn.disabled = currentIndex === 0;
        upBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        upBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
    }
    
    if (downBtn) {
        downBtn.disabled = currentIndex >= cards.length - 1;
        downBtn.style.opacity = currentIndex >= cards.length - 1 ? '0.3' : '1';
        downBtn.style.cursor = currentIndex >= cards.length - 1 ? 'not-allowed' : 'pointer';
    }
}

// Delete card
function deleteCard(cardId) {
    if (cards.length <= 1) {
        alert('You must have at least one card!');
        return;
    }
    
    if (confirm('Are you sure you want to delete this card?')) {
        cards = cards.filter(card => card.id !== cardId);
        
        // Adjust currentIndex if needed
        if (currentIndex >= cards.length) {
            currentIndex = Math.max(0, cards.length - 1);
        }
        
        saveCards();
        renderCards();
    }
}

// Modal functions
function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('newCallForm').reset();
}

function closeModalOnOverlay(event) {
    if (event.target === document.getElementById('modalOverlay')) {
        closeModal();
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Create new card
    const newCard = {
        id: Date.now(),
        imageUrl: data.imageUrl || '',
        fullName: data.fullName,
        homeTown: data.homeTown,
        purpose: data.purpose,
        category: data.category,
        bookings: 0
    };
    
    // Add to beginning of cards array
    cards.unshift(newCard);
    currentIndex = 0;
    
    saveCards();
    renderCards();
    closeModal();
    
    // Show success message
    showNotification('Card created successfully!');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCards();
    
    // Add event listeners to navigation buttons
    const buttons = document.querySelectorAll('.control-btn');
    if (buttons[1]) buttons[1].onclick = moveUp;
    if (buttons[2]) buttons[2].onclick = moveDown;
});


